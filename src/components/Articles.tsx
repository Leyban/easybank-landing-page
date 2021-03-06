import { image } from "../images/image"
import { Blog, BlogProps } from "./Blog"

export const Articles:React.FC = () => {
    const receive:BlogProps = {
        image:image.imageCurrency,
        author:'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    }
    const treat:BlogProps = {
        image:image.imageRestaurant,
        author:'Wilson Hutton',
        title:'Treat yourself without worrying about money',
        content:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    }
    const travel:BlogProps = {
        image:image.imagePlane,
        author:'Wilson Hutton',
        title: ' Take your Easybank card wherever you go',
        content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    }
    const beta:BlogProps = {
        image:image.imageConfetti,
        author: 'Claire Robinson',
        title: ' Our invite-only Beta accounts are now live!',
        content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... '
    }
    return(
        <div className="articles">
            <h2>Latest Articles</h2>
            <div className="Blogs">
                <Blog {...receive}/>
                <Blog {...treat}/>
                <Blog {...travel}/>
                <Blog {...beta}/>
            </div>
            
        </div>
    )
}