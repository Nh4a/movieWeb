import herobg from '../assets/image/herobg.jpg'


const HeroSection=()=>{
    return (
    <>
        <div 
            className='h-screen bg-no-repeat bg-center bg-cover'
            style={{backgroundImage:`url(${herobg})`}}
        >
        </div>
    </>)
}
export default HeroSection;