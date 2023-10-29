import stats from "../../data/data.json";
import { StatSection, StatList, StatTitle, StatItem } from "./Statistics.styled";

export const Statistics = ({ title, stats: {id, label, percentage} }) => {
    return (
        <StatSection>
            <StatTitle>{title}</StatTitle>

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id} className="item">
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </StatItem>
                    )
                })}
            </StatList>
        </StatSection>
    )
}