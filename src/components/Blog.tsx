export interface BlogProps {
    image:any;
    author:string;
    title:string;
    content:string;
}

export const Blog:React.FC<BlogProps> = (props) => {
    return(
        <div className="blog-container">
            <img src={props.image} alt="blog" />
            <p className="author">By {props.author}</p>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}