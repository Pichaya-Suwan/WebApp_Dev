import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component params={params} navigate={navigate} {...props} />;
  };

  return Wrapper;
};
