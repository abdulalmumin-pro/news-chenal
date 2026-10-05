import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headline = data.data;
    console.log(headline);

    return (
        <div className="bg-red-700 text-white mt-2">
            <MarqueeText className="py-1.5"
             direction="right" duration={10}>
            {
                headline.map((h) => <span key={h.id}>
                    <span>{h.title}</span>
                    <span className='mx-4'>•</span>
                </span>)
            }
            </MarqueeText>
        </div>
    );
};

export default Marquee;