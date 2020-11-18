export class NewCity {
    city: string;
    newCityHandler: (city: string) => void;
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

     private handleNewCity(): void{
        const input = document.querySelector<HTMLInputElement>('#cityname');
        this.city = input.value;
        this.newCityHandler(this.city);
        input.value = '';
     }
}
