export default function Calendar() {
    return (
        <main>
            <style>{`
                .calendar-page-header { padding: 4rem 0 2rem; text-align: center; }
                .calendar-wrapper {
                    background: white; border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
                    overflow: hidden; border: 1px solid rgba(0, 0, 0, 0.05); display: grid;
                    grid-template-columns: 350px 1fr; min-height: 600px;
                }
                @media (max-width: 900px) { .calendar-wrapper { grid-template-columns: 1fr; } }
                .calendar-sidebar { background: #ffffff; padding: 2rem; border-right: 1px solid var(--border-color); }
                .sidebar-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; color: #1e293b; }
                .upcoming-list { display: flex; flex-direction: column; gap: 1rem; }
                .mini-event-card {
                    background: #f8fafc; padding: 1rem; border-radius: 12px; border: 1px solid var(--border-color);
                    border-left: 4px solid var(--primary-color); transition: transform 0.2s;
                }
                .mini-event-card:hover { transform: translateX(5px); background: white; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); }
                .mini-date { font-size: 0.8rem; color: var(--primary-color); font-weight: 600; margin-bottom: 0.25rem; }
                .mini-title { font-weight: 600; color: #1e293b; font-size: 0.95rem; }
                .calendar-main { padding: 2rem; }
                .cal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
                .month-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; }
                .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1rem; }
                .cal-day-header { text-align: center; font-weight: 600; color: var(--text-muted); padding-bottom: 0.5rem; }
                .cal-day {
                    aspect-ratio: 1; border-radius: 12px; border: 1px solid #f1f5f9; background: #f8fafc;
                    padding: 0.5rem; position: relative; cursor: pointer; transition: all 0.2s;
                }
                .cal-day:hover { border-color: var(--primary-color); background: #ffffff; }
                .cal-day.active { background: #eff6ff; border-color: #3b82f6; }
                .day-number { font-weight: 600; color: #1e293b; }
                .day-event-dot {
                    width: 6px; height: 6px; background: #3b82f6; border-radius: 50%;
                    position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%);
                }
            `}</style>

            <section className="calendar-page-header mesh-gradient-2" style={{marginBottom: '2rem'}}>
                <div className="container">
                    <h1 style={{color: '#e0e7ff'}}>Event Schedule</h1>
                    <p style={{color: '#c7d2fe'}}>Don't miss out on what's happening this month.</p>
                </div>
            </section>

            <section className="container" style={{paddingBottom: '4rem'}}>
                <div className="calendar-wrapper">
                    <aside className="calendar-sidebar">
                        <h3 className="sidebar-title">Upcoming</h3>
                        <div className="upcoming-list">
                            <div className="mini-event-card">
                                <div className="mini-date">Feb 4</div>
                                <div className="mini-title">Water Contamination Detection</div>
                            </div>
                            <div className="mini-event-card" style={{borderLeftColor: '#ec4899'}}>
                                <div className="mini-date">Feb 7</div>
                                <div className="mini-title">Payload Party Hackathon</div>
                            </div>
                            <div className="mini-event-card" style={{borderLeftColor: '#8b5cf6'}}>
                                <div className="mini-date">Feb 14</div>
                                <div className="mini-title">Kavya Sangam Poetry</div>
                            </div>
                        </div>
                    </aside>

                    <div className="calendar-main">
                        <div className="cal-header">
                            <h2 className="month-title">February 2026</h2>
                            <div className="cal-actions">
                                <button className="btn btn-outline btn-sm">&lt;</button>
                                <button className="btn btn-outline btn-sm">&gt;</button>
                            </div>
                        </div>
                        <div className="cal-grid" id="calendar-grid">
                            <div className="cal-day-header">Sun</div>
                            <div className="cal-day-header">Mon</div>
                            <div className="cal-day-header">Tue</div>
                            <div className="cal-day-header">Wed</div>
                            <div className="cal-day-header">Thu</div>
                            <div className="cal-day-header">Fri</div>
                            <div className="cal-day-header">Sat</div>

                            {/* Empty Days */}
                            <div className="cal-day" style={{opacity: 0.3}}>29</div>
                            <div className="cal-day" style={{opacity: 0.3}}>30</div>
                            <div className="cal-day" style={{opacity: 0.3}}>31</div>

                            {/* Feb 1-7 */}
                            <div className="cal-day"><div className="day-number">1</div></div>
                            <div className="cal-day"><div className="day-number">2</div></div>
                            <div className="cal-day"><div className="day-number">3</div></div>
                            <div className="cal-day active">
                                <div className="day-number">4</div>
                                <div className="day-event-dot"></div>
                            </div>
                            <div className="cal-day"><div className="day-number">5</div></div>
                            <div className="cal-day"><div className="day-number">6</div></div>
                            <div className="cal-day active">
                                <div className="day-number">7</div>
                                <div className="day-event-dot" style={{background: '#ec4899'}}></div>
                            </div>

                            {/* Feb 8-14 */}
                            <div className="cal-day"><div className="day-number">8</div></div>
                            <div className="cal-day"><div className="day-number">9</div></div>
                            <div className="cal-day"><div className="day-number">10</div></div>
                            <div className="cal-day"><div className="day-number">11</div></div>
                            <div className="cal-day"><div className="day-number">12</div></div>
                            <div className="cal-day"><div className="day-number">13</div></div>
                            <div className="cal-day active">
                                <div className="day-number">14</div>
                                <div className="day-event-dot" style={{background: '#8b5cf6'}}></div>
                            </div>

                            {/* Feb 15-21 */}
                            <div className="cal-day"><div className="day-number">15</div></div>
                            <div className="cal-day"><div className="day-number">16</div></div>
                            <div className="cal-day"><div className="day-number">17</div></div>
                            <div className="cal-day"><div className="day-number">18</div></div>
                            <div className="cal-day"><div className="day-number">19</div></div>
                            <div className="cal-day"><div className="day-number">20</div></div>
                            <div className="cal-day"><div className="day-number">21</div></div>

                            {/* Feb 22-28 */}
                            <div className="cal-day"><div className="day-number">22</div></div>
                            <div className="cal-day"><div className="day-number">23</div></div>
                            <div className="cal-day"><div className="day-number">24</div></div>
                            <div className="cal-day"><div className="day-number">25</div></div>
                            <div className="cal-day"><div className="day-number">26</div></div>
                            <div className="cal-day"><div className="day-number">27</div></div>
                            <div className="cal-day"><div className="day-number">28</div></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
