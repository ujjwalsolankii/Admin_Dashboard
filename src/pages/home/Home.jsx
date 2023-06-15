import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart";
import "./home.css"
import { userdata } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userdata} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidget">
          <WidgetSmall/>
          <WidgetLarge/> 
        </div>
    </div>
  );
}
