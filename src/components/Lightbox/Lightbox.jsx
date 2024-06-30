import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
export default function LightboxComponent({slides, currentIndex, isOpen, setOpen, ...delegated}) {
  console.log(currentIndex)

  return (
    <>
      <Lightbox
        open={isOpen}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
        {...delegated}
      />
    </>
  );
}