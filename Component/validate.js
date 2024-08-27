    export function validateEmail (email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    export function validatePassword  (password){
        const re = /^[A-Z].*[\W_]/;
        return re.test(String(password).toString());
    }
