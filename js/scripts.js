
const container = document.querySelector('.container');

const swapy = Swapy.createSwapy(container, {
         animation: 'spring' // or dynamic or none
});

// You can disable and enable it anytime you want
swapy.enable(true);
