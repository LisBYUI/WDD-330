import {
    getLocation
} from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

export default class QuakesController {
    constructor(parent, position = null) {
        this.parent = parent;
        this.parentElement = null;
        this.position = position || {
            lat: 0,
            lon: 0
        };
        this.quakes = new Quake();
        this.quakesView = new QuakesView();
    }
    async init() {
        this.parentElement = document.querySelector(this.parent);
        await this.initPos();
        this.getQuakesByRadius(100);
    }
    async initPos() {
       
        if (this.position.lat === 0) {
            try {
           
                const posFull = await getLocation();

                this.position.lat = posFull.coords.latitude;//44.068203;
                this.position.lon = posFull.coords.longitude;//-114.742043;
                //console.log(posFull);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async getQuakesByRadius(radius = 100) {
   
        this.parentElement.innerHTML = '<li>Loading...</li>';
   
        const quakeList = await this.quakes.getEarthQuakesByRadius(
            this.position,
            100
        );
        
        this.quakesView.renderQuakeList(quakeList, this.parentElement);

        this.parentElement.addEventListener('touchend', e => {
            if (e.target.dataset.id) {
                this.getQuakeDetails(e.target.dataset.id);
            }
        });

        this.parentElement.addEventListener('click', e => {
            if (e.target.dataset.id) {
                this.getQuakeDetails(e.target.dataset.id);
            }
        });
    
    }
    async getQuakeDetails(quakeId) {
      
        const quake = this.quakes.getQuakeById(quakeId);
    
        const back = this.quakesView.renderQuake(quake, this.parentElement);
        back.addEventListener('touchend', e => {
            this.getQuakesByRadius();
        })

        back.addEventListener('click', e => {
            this.getQuakesByRadius();
        })
    }
}