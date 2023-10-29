import stats from "../../data/data.json";
import { StatSection, StatList, StatTitle, StatItem, StatLabel, StatPercentage } from "./Statistics.styled";

export const Statistics = ({ title, stats: {id, label, percentage} }) => {
    return (
        <StatSection>
            <StatTitle>{title}</StatTitle>

            <StatList>
                {stats.map(stat => {
                    return (
                        <StatItem key={stat.id} className="item">
                            <StatLabel>{stat.label}</StatLabel>
                            <StatPercentage>{stat.percentage}%</StatPercentage>
                        </StatItem>
                    )
                })}
            </StatList>
        </StatSection>
    )
}