class Commit{
    constructor(sha1,parent,message, files) {
        this.sha1 = sha1;
        this.parent = parent;

        this.message = message;
        this.files = files;
    }

    getMessage() {
        return this.message;
    }

    getFiles() {
        return this.files;
    }

}

export default Commit;