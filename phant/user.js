class account{
    constructor(name, password, email){
        this.name = name;
        this.password = password;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getPassword(){
        return this.password;
    }

    getEmail(){
        return this.email;
    }
}