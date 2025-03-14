import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loading">
      <div className="spinner">
        <div className="spinner_items">
          <img width={200} height={200} src="/code-logo1.png" alt="logo" />
        </div>
        <p className="fs-4 pt-3">loading . . .</p>
      </div>
    </div>
  );
};

export default LoadingPage;
