import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function () {
    const swiper = new Swiper('.js_swiper_advantages', {
        modules: [Autoplay],
        autoplay: {
            delay: 2000
        },
        loop: true,
        speed: 500,
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        breakpoints: {
            0: {
                spaceBetween: 20
            },
            480: {
                spaceBetween: 30
            },
            640: {
                spaceBetween: 40
            },
            911: {
                spaceBetween: 60
            }
        }
    });

    swiper.autoplay.stop();

    setTimeout(function () {
        swiper.autoplay.start();
    }, 1000);
}
