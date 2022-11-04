export class Trip {

    private _passenger;
    public get passenger() {
        return this._passenger;
    }
    private _traveller;
    public get traveller() {
        return this._traveller;
    }
    private _place;
    public get place() {
        return this._place;
    }
    public set place(value) {
        this._place = value;
    }
    private _startDate;
    public get startDate() {
        return this._startDate;
    }
    public set startDate(value) {
        this._startDate = value;
    }
    private _endData;
    public get endData() {
        return this._endData;
    }
    public set endData(value) {
        this._endData = value;
    }
    private _imageIcon;
    public get imageIcon() {
        return this._imageIcon;
    }
    public set imageIcon(value) {
        this._imageIcon = value;
    }


    constructor(passenger:string, traveller:string, place:string, startDate:Date, endDate:Date){
        this.passenger = passenger;
        this.traveller = traveller;
        this.place = place;
        this.startDate = startDate;
        this.endData = endDate;
        this.imageIcon = this.set_image_icon(place);

    }

    private set_image_icon(place:string){
        
        return place;

    }

}