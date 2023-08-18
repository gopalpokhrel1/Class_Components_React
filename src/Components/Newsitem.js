import React, { Component } from 'react'

export class Newsitem extends Component {
     
 

    render() {

        let {title, description, imageUrl, newsUrl}= this.props;
        return (
            <>
                <div className="card container" style={ {width: "9rem;"}}>
                    <img src={imageUrl}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Newsitem
