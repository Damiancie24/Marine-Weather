export class NewCity {
    city: string;
    newCityHandler: (city: string) => void;
    // lat: string;
    // lng: string;

    constructor(handler: (city: string) => void) {
        this.handleAddCity();
        this.newCityHandler = handler;
    }
    handleAddCity(): void {
        document.querySelector('#cityAddBtn').addEventListener('click', () => {
            this.handleNewCity();
        });
        document.querySelector('#cityname').addEventListener('keypress', (e: KeyboardEvent) => {
            if (e.keyCode === 13) {
                this.handleNewCity();
            }
        });
    }
    // handleHistoryAddCity(): void {
    //     document.querySelector('#historyCityAddBtn').addEventListener('click', () => {
    //         this.handleHistoryNewCity();
    //     });
    //     // document.querySelector('#cityname').addEventListener('keypress', (e: KeyboardEvent) => {
    //     //     if (e.keyCode === 13) {
    //     //         this.handleNewCity();
    //     //     }
    //     // });
    // }

    private handleNewCity(): void {
        const input = document.querySelector<HTMLInputElement>('#cityname');
        this.city = input.value;
        this.newCityHandler(this.city);
        input.value = '';
    }
    // private handleHistoryNewCity(): void {
    //     const input = document.querySelector<HTMLInputElement>('#historycityname');
    //     this.city = input.value;
    //     this.newCityHandler(this.city);
    //     input.value = '';
    // }


    // handleAddMarine(): void {
    //     console.log('aaaa', this)
    //     document.querySelector('#marineAddBtn').addEventListener('click', () => {
    //         console.log('bb', this)
    //         this.handleNewMarine();
    //     });
    // }

    // private handleNewMarine(): void {
    //     console.log('cc')
    //     const inputLat = document.querySelector<HTMLInputElement>('.lat');
    //     this.lat = inputLat.value;
    //     const inputLng = document.querySelector<HTMLInputElement>('.lng');
    //     this.lng = inputLng.value;
    //     this.newMarineHandler(this.lat, this.lng);

    // }
}
