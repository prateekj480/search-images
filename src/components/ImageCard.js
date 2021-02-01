import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { span: 0 }
    }

    getImageHeight = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 2);
        this.setState({ span });
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.getImageHeight)
    }

    render() {
        const { description, urls } = this.props.image;
        return <img style={{ gridRowEnd: `span ${this.state.span}`, marginBottom: "5px" }} ref={this.imageRef} alt={description} src={urls.regular}></img>
    }
}

export default ImageCard;