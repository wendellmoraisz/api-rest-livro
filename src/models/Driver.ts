export default class Driver {

    private _id: number;
    private _name: string;
    private _birthDate: Date;

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get birthDate() {
        return this._birthDate;
    }
}