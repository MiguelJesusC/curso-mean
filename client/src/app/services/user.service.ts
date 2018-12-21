import { Injectable} from '@angular/core';
import {Http, Response, Headers } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'; 
import {GLOBAL} from './global';
import { identity } from 'rxjs';

@Injectable()
export class UserService{
    public identity; //Propiedades  
    public token;   //Propiedades 
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    signup(user_to_login, gethash = null){

        if(gethash != null){
            user_to_login.gethash = gethash;
        }
        let json = JSON.stringify(user_to_login);
        let params = json;

        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'login',params,{headers: headers})
            .pipe(map(res => res.json()));
    }

    register(user_to_register){

        let json = JSON.stringify(user_to_register); //Obejto convertidor en String de JSON 
        let params = json; 

        let headers = new Headers({'Content-Type':'application/json'}); //Tipo de contenido

        return this._http.post(this.url+'register',params,{headers: headers})
            .pipe(map(res => res.json())); //Metodo AJAX al servidor, lugar del metodo register(API), parametros que va a guardar el API() y  al final se transforma en JSON. 

    }

    updateUser(user_to_update){
        let json = JSON.stringify(user_to_update); //Obejto convertidor en String de JSON 
        let params = json; 

        let headers = new Headers({'Content-Type':'application/json','Authorization':this.getToken()}); //Tipo de contenido

        return this._http.put(this.url+'update-user/'+user_to_update._id,params,{headers: headers})
            .pipe(map(res => res.json())); //Metodo AJAX al s   ervidor, lu gar del metodo register(API), parametros que va a guardar el API() y  al final se transforma en JSON. 


    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity !="undefined"){
            this.identity = identity;
        }else{
            this.identity = null;

        }
        return this.identity;
    }
    getToken(){
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }
        return this.token;
    }

    
}