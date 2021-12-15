import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    private _keySize : number = 256;
    private _iterations : number = 100;

    constructor () {

    }

    get(key : string) : string {
        if (key) {
            const realKey = crypto.HmacSHA1(key, navigator.userAgent.toLowerCase()).toString();
            let value = localStorage.getItem(realKey);
            if (value) {
                return this.decrypt( value, realKey).toString();
            } else {
                value = sessionStorage.getItem(realKey);
                if (value) {
                    return this.decrypt( value, realKey).toString();
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }
    }

    set(key : string, value : string, inLocalStorage: boolean) : void {
        if (key && value) {
            const realKey = crypto.HmacSHA1(key, navigator.userAgent.toLowerCase()).toString();
            const encryptedValue = this.encrypt(value, realKey);
            if (inLocalStorage) {
                localStorage.setItem(realKey, encryptedValue);
                this.delete(key, !inLocalStorage);
            }else {
                sessionStorage.setItem(realKey, encryptedValue);
                this.delete(key, !inLocalStorage);
            }

        }
    }

    delete(key: string, inLocalStorage: boolean) : void {
        if (key) {
            const realKey = crypto.HmacSHA1(key, navigator.userAgent.toLowerCase()).toString();
            if (inLocalStorage) {
                localStorage.removeItem(realKey);
            } else {
                sessionStorage.removeItem(realKey);
            }
        }
    }

    private encrypt (msg : string , pass: string) : string {
        const salt = crypto.lib.WordArray.random(128/8);

        const key = crypto.PBKDF2(pass, salt, {
            keySize: this._keySize/32,
            iterations: this._iterations
        });

        const iv = crypto.lib.WordArray.random(128/8);

        const encrypted = crypto.AES.encrypt(msg, key, {
            iv: iv,
            padding: crypto.pad.Pkcs7,
            mode: crypto.mode.CBC
        });

        var transitmessage = salt.toString() + iv.toString() + encrypted.toString();
        return transitmessage;
    }

    private decrypt (transitmessage : string, pass : string) : string {
        const salt = crypto.enc.Hex.parse(transitmessage.substr(0, 32));
        var iv = crypto.enc.Hex.parse(transitmessage.substr(32, 32))
        var encrypted = transitmessage.substring(64);

        var key = crypto.PBKDF2(pass, salt, {
            keySize: this._keySize/32,
            iterations: this._iterations
            });

        var decrypted = crypto.AES.decrypt(encrypted, key, {
            iv: iv,
            padding: crypto.pad.Pkcs7,
            mode: crypto.mode.CBC

        })

        return decrypted.toString(crypto.enc.Utf8);
    }
}
