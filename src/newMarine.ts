export class NewMarine {
    lat: string;
    lng: string;
    newMarineHandler: (lat: string, lng: string) => void;

    constructor(handler: (lat: string, lng: string) => void) {
        console.log('ddd')
        this.handleAddMarine();
        this.newMarineHandler = handler;
    }

    // document.addEventListener('DOMContentLoaded', function () {


    handleAddMarine(): void {
        console.log('aaaa', this)
        document.querySelector('#marineAddBtn').addEventListener('click', () => {
            console.log('bb', this);
            this.handleNewMarine();
        });
    }



    // handleAddMarine(): void {
    //     console.log('aaaa', this)
    //     document.querySelector('#marineAddBtn').addEventListener('click', () => {
    //         console.log('bb', this);
    //         this.handleNewMarine();
    //     });
    // }
    // document.addEventListener('DOM', () => {
    //     document.querySelector('#marineAddBtn').addEventListener('click', () => {
    //                     console.log('bb', this)
    //                     this.handleNewMarine();
    //                 });
    // }

    private handleNewMarine(): void  {
    console.log('cc');
    const inputLat = document.querySelector<HTMLInputElement>('.lat');
    this.lat = inputLat.value;
    const inputLng = document.querySelector<HTMLInputElement>('.lng');
    this.lng = inputLng.value;
    // this.newMarineHandler(this.lat, this.lng);
    }

    // private handleNewMarine(): void {
    // console.log('cc');
    // const inputLat = document.querySelector<HTMLInputElement>('.lat');
    // this.lat = inputLat.value;
    // const inputLng = document.querySelector<HTMLInputElement>('.lng');
    // this.lng = inputLng.value;
    // this.newMarineHandler(this.lat, this.lng);

    // }
}
