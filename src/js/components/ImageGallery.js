import React, { PropTypes } from 'react';
import Lightbox from 'react-images';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      isOpen: false
    };
  }

  prevImage() {
    this.setState({
      currentImage: --this.state.currentImage
    });
  }

  nextImage() {
    this.setState({
      currentImage: ++this.state.currentImage
    });
  }

  onClose() {
    this.setState({
      isOpen: false
    })
  }

  openImage(index) {
    this.setState({
      currentImage: index,
      isOpen: true
    });
  }

  thumbnailClick(index) {
    this.setState({
      currentImage: index
    });
  }

  render() {

    let imageThumbnails = this.props.images.map((image, index) => {
      return (
        <img key={index} onClick={this.openImage.bind(this, index)}
             src={image.src} alt={image.caption}
             title="Click to view image"/>
      );
    });

    return (
      <div className="image-gallery">
        {imageThumbnails}
        <Lightbox
          images={this.props.images}
          showThumbnails={true}
          onClickThumbnail={this.thumbnailClick.bind(this)}
          currentImage={this.state.currentImage}
          isOpen={this.state.isOpen}
          backdropClosesModal={true}
          onClickPrev={this.prevImage.bind(this)}
          onClickNext={this.nextImage.bind(this)}
          onClose={this.onClose.bind(this)}/>
      </div>
    );
  }
}
