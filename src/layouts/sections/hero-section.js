import { RichText } from "../../components";

function HeroSection(props) {
  const { heading, subheading, image, alt } = props;
  return (
    <div>
      <div>
        {image ? (
          <img
            src={`${image.url}?auto=format&fit=clip&h=750`}
            srcSet={`${image.url}?auto=format&fit=clip&h=750 1x, ${image.url}?auto=format&fit=clip&h=1500 2x`}
            alt={alt || ""}
          />
        ) : null}
      </div>
      <div>
        <div>
          <h1>{heading}</h1>
          {subheading ? <RichText content={subheading} /> : null}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
