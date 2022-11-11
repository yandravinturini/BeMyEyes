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
    private _startDate;
    public get startDate() {
        return this._startDate;
    }
    private _endDate;
    public get endDate() {
        return this._endDate;
    }
    private _imageIcon;
    public get imageIcon() {
        return this._imageIcon;
    }

    private _user_status;
    public get user_status() {
        return this._user_status;

    }
    private _profileIcon;
    public get profileIcon() {
        return this._profileIcon;
    }

    


    constructor(passenger:string, traveller:string, place:string, startDate:string, endDate:string, user_status: string, imageIcon:string, profileIcon:string){
        var sDate = new Date(startDate)
        var eDate = new Date(endDate)
        this._passenger = passenger;
        this._traveller = traveller;
        this._place = place;
        this._startDate = sDate;
        this._endDate = eDate;
        this._user_status = user_status;
        this._imageIcon = imageIcon;
        this._profileIcon = profileIcon;

    }

    private set_image_icon(place:string){
        
        return place;

    }

}