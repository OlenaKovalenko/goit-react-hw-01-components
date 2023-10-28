import stats from "../../../data/data.json"

export const Statistics = ({ title, stats: {id, label, percentage} }) => {
    return (
        <section className="statistics">
            <h2 class="title">Upload stats</h2>

            <ul className="stat-list">
                {stats.map(stat => {
                    return (
                        <li key={stat.id} className="item">
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}