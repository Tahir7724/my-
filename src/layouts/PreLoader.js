import { Fragment } from "react";
const PreLoader = () => {
  return (
    <Fragment>
      {/* Preloader */}
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              {/* Pr-Loader Image */}
              <img
                src="assets/images/preload.png"
                alt="Luique - Personal Portfolio HTML Template"
              />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
