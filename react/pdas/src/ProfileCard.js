function ProfileCard({ title, handle, image, description }) {
    // const { title, handle } = props; 
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">Title is {title}</p>
                    <p className="handle is-6">Handle is {handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    )
}

export default ProfileCard;