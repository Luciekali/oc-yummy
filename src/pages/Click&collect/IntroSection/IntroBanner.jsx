import '../../../styles/pages/clickandcollect/intro-banner.scss';

function IntroBanner () {
return (
    <div className='intro-banner'>
        <div className='intro-content'>
            <h1>Click & Collect</h1>
            <p className='intro-text'>Emportez chez vous les nouilles les plus <span className='colored-text'>yummy</span> de Paris</p>
        </div>
        <div>
            <img className='intro-img' src='src\assets\img\click&collect\pexels-fauxels-3184192.jpg' alt='photo de nos plats'/>
        </div>
    </div>
)
}

export default IntroBanner