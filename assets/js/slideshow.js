document.addEventListener('DOMContentLoaded', () => {
	
	
	
	
	
	
	var sliderInterval = "";
	let numberOfSlidesBeingDisplayed = 2;
	
	let contentWrapperElement = document.querySelector('.slider-content-wrapper');
	let sliderContainerElement = document.querySelector('.slider-container');
	let sliderItemElements = document.querySelectorAll('.slider-item');
	let sliderSizeRegulatorElement = document.querySelector('.slider-size-regulator');
	let variableSliderWidth = contentWrapperElement.offsetWidth - 20; // giving the variablesliderwidth the same width as the visual slider container to later use that width to divide by the amount of images you want shown in the visual slider
	viewportWidthDetection();
	sliderContainerElement.style.width = (contentWrapperElement.offsetWidth - 20) + `px`; // using the contentwrapperelements width to determine how wide the visual container of the slider should be by using offsetWidth
	
	


	sliderItemElements.forEach((sliderItemElement) => {
		sliderItemElement.style.width = variableSliderWidth / numberOfSlidesBeingDisplayed + `px`; // dividing variablesliderwidth by 3 to display 3 images on the visual slider

	})

	sliderSizeRegulatorElement.style.width = ((variableSliderWidth / numberOfSlidesBeingDisplayed) * sliderItemElements.length) + `px`; // finds the width of a single slider item and times it by the amount of slider items in total to give the hiden slider-item container it's width.

	slideImagesByInterval();
	
	sliderContainerElement.addEventListener('mouseover',()=>{
		clearInterval(sliderInterval);
	})

	sliderContainerElement.addEventListener('mouseout',()=>{
		slideImagesByInterval();
	})

	
		sliderSizeRegulatorElement.addEventListener('transitionend', () => {
			sliderSizeRegulatorElement.style.transition = "unset";
			if(sliderSizeRegulatorElement.childNodes[0].nodeName == "#text"){
				sliderSizeRegulatorElement.removeChild(sliderSizeRegulatorElement.childNodes[0]);
				let firstChild = sliderSizeRegulatorElement.removeChild(sliderSizeRegulatorElement.childNodes[0]);
				sliderSizeRegulatorElement.insertAdjacentElement('beforeend', firstChild);
				sliderSizeRegulatorElement.style.marginLeft = 0;
				return;
			}

			let firstChild = sliderSizeRegulatorElement.removeChild(sliderSizeRegulatorElement.childNodes[0]);
			sliderSizeRegulatorElement.insertAdjacentElement('beforeend', firstChild);
			sliderSizeRegulatorElement.style.marginLeft = 0;
	

		})

	function slideImagesByInterval() {

		let sliderMovedDistance = variableSliderWidth / numberOfSlidesBeingDisplayed;

		sliderInterval = setInterval(() => {
			sliderSizeRegulatorElement.style.transition = "all 0.3s";
			sliderSizeRegulatorElement.style.marginLeft = -sliderMovedDistance + 'px';

		}, 2500)

	}


	function viewportWidthDetection(){
		let viewportWidth1000 = window.matchMedia("(min-width: 1000px)");
		let viewportWidth550 = window.matchMedia("(max-width: 550px)");
		if(viewportWidth1000.matches){
			numberOfSlidesBeingDisplayed = 3; // Post 1000px;
		}	
		else{
			numberOfSlidesBeingDisplayed = 2; // Sub 1000px, Post 550px;
			sliderContainerElement.style.height = 240+'px';
		}
	
		if(viewportWidth550.matches){
			numberOfSlidesBeingDisplayed = 1; // Sub 550px;
			sliderContainerElement.style.height = 210+'px';
		}
	}

})