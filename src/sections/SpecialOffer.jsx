import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Oferta
          <span className='text-coral-red'> Especial</span>
        </h2>
        <p className='mt-4 info-text'>
        Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas inmejorables. Desde selecciones de primer nivel hasta ahorros increíbles, nosotros
          ofrecer un valor incomparable que nos diferencia.
        </p>
        <p className='mt-6 info-text'>
        Navegue por un reino de posibilidades diseñado para satisfacer sus
          deseos, superando las expectativas más elevadas. Tu viaje con nosotros es
          nada menos que excepcional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
