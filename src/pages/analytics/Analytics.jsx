import Chart from "../../components/chart/Chart";
import "./analytics.css"
import { userdata } from "../../dummyData";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function Analytics() {
    return (
        <div className="analytics">
            <Chart data={userdata} title="User Analytics" grid dataKey="Active User" />
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$4,415</span>
                        <span className="featuresMoneyRate">
                            -1.4 <ArrowDownward className="featuredIcon negative" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Profit</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$1,215</span>
                        <span className="featuresMoneyRate">
                            +2.4 <ArrowUpward className="featuredIcon" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revanue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$2,415</span>
                        <span className="featuresMoneyRate">
                            -11.4 <ArrowDownward className="featuredIcon negative" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$2,215</span>
                        <span className="featuresMoneyRate">
                            +2.4 <ArrowUpward className="featuredIcon" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>

            </div>
        </div>
    );
}