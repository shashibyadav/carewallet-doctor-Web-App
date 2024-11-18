import "../styles/shared/content-holder.css";

const ContentHolder = ({ className = 'content-holder', children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default ContentHolder;
