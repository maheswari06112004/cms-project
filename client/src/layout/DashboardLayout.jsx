// import React, { useState } from 'react';

// const COLORS = {
//     mainBg: '#F3E5F5', 
//     sidebarBg: '#6A1B9A', 
//     sidebarText: '#F3E5F5', 
//     sidebarActiveBg: '#E1BEE7', 
//     sidebarActiveText: '#4A148C', 
//     sidebarHoverBg: '#AB47BC', 
//     sidebarHoverText: '#FFFFFF', 
//     logout: '#D32F2F', 
//     logoutHoverBg: '#C62828', 
//     logoutHoverText: '#FFFFFF', 
//     collapse: '#66BB6A',
//     collapseHoverBg: '#4CAF50', 
//     collapseHoverText: '#FFFFFF', 
// };

// const sidebarItems = [
//     { name: 'Books', icon: '📚' },
//     { name: 'View Favorites', icon: '⭐' },
//     { name: 'CMS Project', icon: '📄' },
//     { name: 'Developer Page', icon: '💻' },
// ];

// function SidebarNavItem({ item, isActive, isSidebarExpanded, onClick }) {
//     const [hover, setHover] = useState(false);

//     const itemStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         padding: '12px 20px',
//         cursor: 'pointer',
//         fontSize: 16,
//         transition: 'background-color 0.3s, color 0.3s, font-weight 0.3s, border-left 0.3s',
//         backgroundColor: isActive ? COLORS.sidebarActiveBg : 'transparent',
//         color: isActive ? COLORS.sidebarActiveText : COLORS.sidebarText,
//         fontWeight: isActive ? 'bold' : 'normal',
//         borderLeft: isActive ? `4px solid ${COLORS.sidebarHoverBg}` : '4px solid transparent', 
//         ...(hover && !isActive && { 
//             backgroundColor: COLORS.sidebarHoverBg,
//             color: COLORS.sidebarHoverText,
//             textDecoration: 'underline',
//         }),
//     };

//     return (
//         <div
//             key={item.name}
//             onClick={onClick}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             style={itemStyle}
//         >
//             <span style={{ marginRight: isSidebarExpanded ? 12 : 0 }}>{item.icon}</span>
//             {isSidebarExpanded && item.name}
//         </div>
//     );
// }

// function SidebarActionButton({ icon, text, isSidebarExpanded, onClick, defaultColor, hoverBg, hoverText }) {
//     const [hover, setHover] = useState(false);

//     const buttonStyle = {
//         marginTop: text === 'Collapse' ? 10 : 0, 
//         padding: '12px 20px',
//         cursor: 'pointer',
//         fontWeight: '600',
//         display: 'flex',
//         alignItems: 'center',
//         userSelect: 'none',
//         justifyContent: isSidebarExpanded ? 'flex-start' : 'center',
//         transition: 'background-color 0.3s, color 0.3s',
//         backgroundColor: hover ? hoverBg : 'transparent',
//         color: hover ? hoverText : defaultColor,
//     };

//     return (
//         <div
//             onClick={onClick}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             style={buttonStyle}
//         >
//             <span style={{ marginRight: isSidebarExpanded ? 12 : 0 }}>{icon}</span>
//             {isSidebarExpanded && text}
//         </div>
//     );
// }

// export default function DashboardLayout({ children }) {
//     const [activeItem, setActiveItem] = useState('Books');
//     const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
//     const sidebarWidth = isSidebarExpanded ? 220 : 70;

//     return (
//         <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: COLORS.mainBg }}>
//             <aside
//                 style={{
//                     width: sidebarWidth,
//                     backgroundColor: COLORS.sidebarBg,
//                     color: COLORS.sidebarText,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     paddingTop: 24,
//                     paddingBottom: 24,
//                     transition: 'width 0.3s ease-in-out',
//                     overflow: 'hidden',
//                 }}
//             >
//                 <div>
//                     <h2
//                         style={{
//                             textAlign: 'center',
//                             marginBottom: 32,
//                             fontWeight: 'bold',
//                             letterSpacing: 1,
//                             color: COLORS.sidebarText,
//                         }}
//                     >
//                         {isSidebarExpanded ? 'Dashboard' : 'D'}
//                     </h2>

//                     <nav>
//                         {sidebarItems.map((item) => (
//                             <SidebarNavItem
//                                 key={item.name}
//                                 item={item}
//                                 isActive={activeItem === item.name}
//                                 onClick={() => setActiveItem(item.name)}
//                                 isSidebarExpanded={isSidebarExpanded}
//                             />
//                         ))}
//                     </nav>
//                 </div>

//                 <div>
//                     <SidebarActionButton
//                         icon="🚪"
//                         text="Logout"
//                         isSidebarExpanded={isSidebarExpanded}
//                         onClick={() => alert('Logging out...')}
//                         defaultColor={COLORS.logout}
//                         hoverBg={COLORS.logoutHoverBg}
//                         hoverText={COLORS.logoutHoverText}
//                     />

//                     <SidebarActionButton
//                         icon={isSidebarExpanded ? '⬅️' : '➡️'}
//                         text={isSidebarExpanded ? 'Collapse' : 'Expand'}
//                         isSidebarExpanded={isSidebarExpanded}
//                         onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
//                         defaultColor={COLORS.collapse}
//                         hoverBg={COLORS.collapseHoverBg}
//                         hoverText={COLORS.collapseHoverText}
//                     />
//                 </div>
//             </aside>

//             <main
//                 style={{
//                     flex: 1,
//                     backgroundColor: COLORS.mainBg,
//                     padding: 32,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     textAlign: 'center',
//                 }}
//             >
//                 <h1 style={{ fontSize: 28, color: COLORS.sidebarActiveText, marginBottom: 30, fontWeight: 'bold' }}>
//                     Welcome to the Dashboard!
//                 </h1>

//                 {children && (
//                     <div
//                         style={{
//                             width: '100%',
//                             maxWidth: '800px',
//                             textAlign: 'left',
//                             backgroundColor: '#fff',
//                             padding: 20,
//                             borderRadius: 8,
//                             boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                             color: COLORS.sidebarActiveText,
//                         }}
//                     >
//                         {children}
//                     </div>
//                 )}
//             </main>
//         </div>
//     );
// }

import React, { useState } from 'react';

// ---
// COLORS and sidebarItems data definitions
// ---
const COLORS = {
    mainBg: '#F3E5F5',
    sidebarBg: '#6A1B9A',
    sidebarText: '#F3E5F5',
    sidebarActiveBg: '#E1BEE7',
    sidebarActiveText: '#4A148C',
    sidebarHoverBg: '#AB47BC',
    sidebarHoverText: '#FFFFFF',
    logout: '#D32F2F',
    logoutHoverBg: '#C62828',
    logoutHoverText: '#FFFFFF',
    collapse: '#66BB6A',
    collapseHoverBg: '#4CAF50',
    collapseHoverText: '#FFFFFF',
};

const sidebarItems = [
    { name: 'Books', icon: '📚' },
    { name: 'View Favorites', icon: '⭐' },
    { name: 'CMS Project', icon: '📄' },
    { name: 'Developer Page', icon: '💻' },
];


function SidebarNavItem({ item, isActive, isSidebarExpanded, onClick }) {
    const [hover, setHover] = useState(false);

    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 20px',
        cursor: 'pointer',
        fontSize: 16,
        transition: 'background-color 0.3s, color 0.3s, font-weight 0.3s, border-left 0.3s',
        backgroundColor: isActive ? COLORS.sidebarActiveBg : 'transparent',
        color: isActive ? COLORS.sidebarActiveText : COLORS.sidebarText,
        fontWeight: isActive ? 'bold' : 'normal',
        borderLeft: isActive ? `4px solid ${COLORS.sidebarHoverBg}` : '4px solid transparent',
        ...(hover && !isActive && {
            backgroundColor: COLORS.sidebarHoverBg,
            color: COLORS.sidebarHoverText,
            textDecoration: 'underline',
        }),
    };

    return (
        <div
            key={item.name}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={itemStyle}
        >
            <span style={{ marginRight: isSidebarExpanded ? 12 : 0 }}>{item.icon}</span>
            {isSidebarExpanded && item.name}
        </div>
    );
}

// ---
// SidebarActionButton Component
// ---
function SidebarActionButton({ icon, text, isSidebarExpanded, onClick, defaultColor, hoverBg, hoverText }) {
    const [hover, setHover] = useState(false);

    const buttonStyle = {
        marginTop: text === 'Collapse' ? 10 : 0,
        padding: '12px 20px',
        cursor: 'pointer',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        justifyContent: isSidebarExpanded ? 'flex-start' : 'center',
        transition: 'background-color 0.3s, color 0.3s',
        backgroundColor: hover ? hoverBg : 'transparent',
        color: hover ? hoverText : defaultColor,
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={buttonStyle}
        >
            <span style={{ marginRight: isSidebarExpanded ? 12 : 0 }}>{icon}</span>
            {isSidebarExpanded && text}
        </div>
    );
}

// ---
// DashboardLayout Component
// ---
export default function DashboardLayout({ children }) {
    const [activeItem, setActiveItem] = useState('Books');
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    const sidebarWidth = isSidebarExpanded ? 220 : 70;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: COLORS.mainBg }}>
            <aside
                style={{
                    width: sidebarWidth,
                    backgroundColor: COLORS.sidebarBg,
                    color: COLORS.sidebarText,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: 24,
                    paddingBottom: 24,
                    transition: 'width 0.3s ease-in-out',
                    overflow: 'hidden',
                }}
            >
                <div>
                    <h2
                        style={{
                            textAlign: 'center',
                            marginBottom: 32,
                            fontWeight: 'bold',
                            letterSpacing: 1,
                            color: COLORS.sidebarText,
                        }}
                    >
                        {isSidebarExpanded ? 'Dashboard' : 'D'}
                    </h2>

                    <nav>
                        {sidebarItems.map((item) => (
                            <SidebarNavItem
                                key={item.name}
                                item={item}
                                isActive={activeItem === item.name}
                                onClick={() => setActiveItem(item.name)}
                                isSidebarExpanded={isSidebarExpanded}
                            />
                        ))}
                    </nav>
                </div>

                <div>
                    <SidebarActionButton
                        icon="🚪"
                        text="Logout"
                        isSidebarExpanded={isSidebarExpanded}
                        onClick={() => alert('Logging out...')}
                        defaultColor={COLORS.logout}
                        hoverBg={COLORS.logoutHoverBg}
                        hoverText={COLORS.logoutHoverText}
                    />

                    <SidebarActionButton
                        icon={isSidebarExpanded ? '⬅️' : '➡️'}
                        text={isSidebarExpanded ? 'Collapse' : 'Expand'}
                        isSidebarExpanded={isSidebarExpanded}
                        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                        defaultColor={COLORS.collapse}
                        hoverBg={COLORS.collapseHoverBg}
                        hoverText={COLORS.collapseHoverText}
                    />
                </div>
            </aside>

            <main
                style={{
                    flex: 1,
                    backgroundColor: COLORS.mainBg,
                    padding: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <h1 style={{ fontSize: 28, color: COLORS.sidebarActiveText, marginBottom: 30, fontWeight: 'bold' }}>
                    Welcome to the Dashboard!
                </h1>

                {children && (
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            textAlign: 'left',
                            backgroundColor: '#fff',
                            padding: 20,
                            borderRadius: 8,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            color: COLORS.sidebarActiveText,
                        }}
                    >
                        {children}
                    </div>
                )}
            </main>
        </div>
    );
}