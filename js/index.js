let weather = prompt(`Select Weather:
    Summer
    Winter
    Fall
    Spring
    Rainy`).toLowerCase().trim();

if (weather === "summer") {
    document.writeln(`
        <div class="main" style="background: url(summer.jpg) no-repeat center; background-size: cover; height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div class="card" style="width: 18rem;">
                <img src="castle.jpg" class="card-img-top" alt="Summer">
                <div class="card-body text-center">
                    <h5 class="card-title text-capitalize">Summer</h5>
                    <p class="card-text">"Golden hours and salt air—let the summer haze take over."</p>
                    <a href="#" class="btn btn-summer">Learn More</a>
                </div>
            </div>
        </div>`);
} 
else if (weather === "winter") {
    document.writeln(`
        <div class="main" style="background: url(winter.jpg) no-repeat center; background-size: cover; height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div class="card" style="width: 18rem;">
                <img src="snow.jpg" class="card-img-top" alt="Winter">
                <div class="card-body text-center">
                    <h5 class="card-title">Winter</h5>
                    <p class="card-text">"Chasing the frost under a velvet sky—embrace the cold quiet."</p>
                    <a href="#" class="btn btn-winter">Learn more</a>
                </div>
            </div>
        </div>`);
}
else if (weather === "fall") {
    document.writeln(`
        <div class="main" style="background: url(fall.jpg) no-repeat center; background-size: cover; height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div class="card" style="width: 18rem;">
                <img src="cyc.jpg" class="card-img-top" alt="Fall Vibes">
                <div class="card-body text-center">
                    <h5 class="card-title">Autumn Haze</h5>
                    <p class="card-text">"Crisp air and amber leaves—watch the world turn to gold."</p>
                    <a href="#" class="btn btn-brown">Learn More</a>
                </div>
            </div>
        </div>`);
}
else if (weather === "spring") {
    document.writeln(`
        <div class="main" style="background: url(spring.jpg) no-repeat center; background-size: cover; height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div class="card" style="width: 18rem;">
                <img src="cake.jpg" class="card-img-top" alt="Fall Vibes">
                <div class="card-body text-center">
                    <h5 class="card-title">New Bloom</h5>
                    <p class="card-text">"Petals in the wind and soft sunlight—everything starts again"</p>
                    <a href="#" class="btn btn-plum">Learn More</a>
                </div>
            </div>
        </div>`);
}
else if (weather === "rainy") {
    document.writeln(`
        <div class="main" style="background: url(rainy.jpg) no-repeat center; background-size: cover; height: 100vh; display: flex; align-items: center; justify-content: center;">
            <div class="card" style="width: 18rem;">
                <img src="umbrella.jpg" class="card-img-top" alt="Rainy Vibes">
                <div class="card-body text-center">
                    <h5 class="card-title">Stormy Skies</h5>
                    <p class="card-text">"Coffee, rain on the glass, and the beauty of a quiet storm."</p>
                    <a href="#" class="btn btn-dull-green">Stay Cozy</a>
                </div>
            </div>
        </div>`);
}
else {
    document.writeln(`<h1>Please add the mentioned weather</h1>`)}