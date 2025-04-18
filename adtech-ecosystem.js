// AdTech Ecosystem Visualization

// Define the components of the AdTech ecosystem
const adtechComponents = {
    // Publisher side
    publisher: {
        id: 'publisher',
        name: 'Publisher (Supply)',
        description: 'Source of ad inventory across various channels',
        details: `
            <p>Publishers provide the inventory (ad space) that is sold to advertisers. They monetize their content through various ad placements.</p>
            <h4>Key Publisher Metrics:</h4>
            <ul>
                <li>Fill rate: 10-80% (varies by channel)</li>
                <li>Impression Rate: ~60%</li>
            </ul>
        `,
        x: 50,
        y: 150,
        category: 'supply',
        connections: ['inventory', 'ssp']
    },
    
    inventory: {
        id: 'inventory',
        name: 'Inventory',
        description: 'Ad units/placements available across channels',
        details: `
            <p>Inventory refers to the ad space that publishers have available to sell to advertisers.</p>
            <h4>Ad Unit Types:</h4>
            <ul>
                <li>Display ads</li>
                <li>Video ads</li>
                <li>Native ads</li>
                <li>Interstitials</li>
            </ul>
        `,
        x: 50,
        y: 250,
        category: 'supply',
        parent: 'publisher',
        connections: ['app', 'website', 'games', 'consoles', 'ooh']
    },
    
    app: {
        id: 'app',
        name: 'Apps (Mobile)',
        description: 'Mobile application ad inventory',
        details: `
            <p>Mobile apps provide rich targeting opportunities through user data and engagement.</p>
            <h4>Common Ad Formats:</h4>
            <ul>
                <li>Banner ads</li>
                <li>Interstitials</li>
                <li>Rewarded video</li>
                <li>Native ads</li>
            </ul>
        `,
        x: 50,
        y: 350,
        category: 'supply',
        parent: 'inventory'
    },
    
    website: {
        id: 'website',
        name: 'Website',
        description: 'Web-based ad inventory',
        details: `
            <p>Websites offer various ad placements across different page locations.</p>
            <h4>Common Ad Units:</h4>
            <ul>
                <li>Leaderboards</li>
                <li>Medium rectangles</li>
                <li>Skyscrapers</li>
                <li>In-content ads</li>
            </ul>
        `,
        x: 50,
        y: 400,
        category: 'supply',
        parent: 'inventory'
    },
    
    games: {
        id: 'games',
        name: 'Games',
        description: 'Gaming platform ad inventory',
        details: `
            <p>Games provide highly engaging environments for advertising.</p>
            <h4>Gaming Ad Types:</h4>
            <ul>
                <li>In-game ads</li>
                <li>Rewarded video</li>
                <li>Playable ads</li>
                <li>Sponsored content</li>
            </ul>
        `,
        x: 50,
        y: 450,
        category: 'supply',
        parent: 'inventory'
    },
    
    consoles: {
        id: 'consoles',
        name: 'Consoles',
        description: 'Gaming console ad inventory',
        details: `
            <p>Console environments offer premium advertising opportunities to engaged audiences.</p>
            <h4>Console Ad Features:</h4>
            <ul>
                <li>Dashboard placements</li>
                <li>In-game integration</li>
                <li>Video ad opportunities</li>
            </ul>
        `,
        x: 50,
        y: 500,
        category: 'supply',
        parent: 'inventory'
    },
    
    ooh: {
        id: 'ooh',
        name: 'OOH Screens',
        description: 'Out-of-Home digital screens',
        details: `
            <p>Digital Out-of-Home screens provide real-world advertising opportunities.</p>
            <h4>OOH Features:</h4>
            <ul>
                <li>Programmatic DOOH</li>
                <li>Location-based targeting</li>
                <li>Dynamic content</li>
                <li>Audience measurement</li>
            </ul>
        `,
        x: 50,
        y: 550,
        category: 'supply',
        parent: 'inventory'
    },
    
    // Exchange layer
    ssp: {
        id: 'ssp',
        name: 'SSP',
        description: 'Supply-Side Platform',
        details: `
            <p>Supply-Side Platforms help publishers sell their inventory efficiently through programmatic channels.</p>
            <h4>SSP Functions:</h4>
            <ul>
                <li>Inventory management</li>
                <li>Yield optimization</li>
                <li>Auction management</li>
                <li>Publisher reporting</li>
            </ul>
        `,
        x: 200,
        y: 150,
        category: 'exchange',
        connections: ['adexchange']
    },
    
    adexchange: {
        id: 'adexchange',
        name: 'Ad Exchange',
        description: 'Marketplace connecting buyers and sellers',
        details: `
            <p>Ad Exchanges facilitate the buying and selling of ad inventory through real-time auctions.</p>
            <h4>Exchange Functions:</h4>
            <ul>
                <li>Real-time bidding (RTB)</li>
                <li>Auction management</li>
                <li>Deal ID support</li>
                <li>Inventory quality control</li>
            </ul>
        `,
        x: 350,
        y: 150,
        category: 'exchange',
        connections: ['inventory_mgmt', 'downstream', 'auctioning', 'creative_validation', 'dsp']
    },
    
    inventory_mgmt: {
        id: 'inventory_mgmt',
        name: 'Inventory Management',
        description: 'Organizing and optimizing available ad inventory',
        details: `
            <p>Inventory management systems help organize and optimize available ad space.</p>
            <h4>Key Components:</h4>
            <ul>
                <li>Inventory forecasting</li>
                <li>Floor price management</li>
                <li>Inventory classification</li>
                <li>Availability tracking</li>
            </ul>
        `,
        x: 350,
        y: 250,
        category: 'exchange',
        parent: 'adexchange'
    },
    
    downstream: {
        id: 'downstream',
        name: 'Downstream Partners',
        description: 'Connected demand sources',
        details: `
            <p>Downstream partners include DSPs and other demand sources that bid on inventory.</p>
            <h4>Partner Types:</h4>
            <ul>
                <li>Major DSPs</li>
                <li>Agency trading desks</li>
                <li>Direct advertisers</li>
                <li>Specialized demand platforms</li>
            </ul>
        `,
        x: 350,
        y: 300,
        category: 'exchange',
        parent: 'adexchange'
    },
    
    auctioning: {
        id: 'auctioning',
        name: 'Auctioning',
        description: 'Bid management and winner selection',
        details: `
            <p>Auction systems determine which advertiser wins the right to show their ad.</p>
            <h4>Auction Types:</h4>
            <ul>
                <li>First-price auctions</li>
                <li>Second-price auctions</li>
                <li>Header bidding auctions</li>
                <li>Private marketplace (PMP) deals</li>
            </ul>
        `,
        x: 350,
        y: 350,
        category: 'exchange',
        parent: 'adexchange'
    },
    
    creative_validation: {
        id: 'creative_validation',
        name: 'Creative Validation',
        description: 'Ensuring ad creative meets requirements',
        details: `
            <p>Creative validation ensures that ads meet technical and content standards.</p>
            <h4>Validation Elements:</h4>
            <ul>
                <li>CATS (Creative QA)</li>
                <li>Creative Quality</li>
                <li>Format Compliance</li>
                <li>Content Compliance</li>
                <li>Malware Scanning</li>
            </ul>
        `,
        x: 350,
        y: 400,
        category: 'exchange',
        parent: 'adexchange'
    },
    
    // Demand Side
    dsp: {
        id: 'dsp',
        name: 'DSP / Ad Servers',
        description: 'Demand-Side Platform',
        details: `
            <p>Demand-Side Platforms enable advertisers to purchase ad inventory programmatically across multiple sources.</p>
            <h4>DSP Functions:</h4>
            <ul>
                <li>Campaign management</li>
                <li>Real-time bidding</li>
                <li>Audience targeting</li>
                <li>Budget management</li>
                <li>Reporting & analytics</li>
            </ul>
        `,
        x: 500,
        y: 150,
        category: 'demand',
        connections: ['pacing', 'targeting', 'privacy', 'advertiser']
    },
    
    pacing: {
        id: 'pacing',
        name: 'Pacing / Frequency',
        description: 'Managing ad delivery rate and frequency',
        details: `
            <p>Pacing controls how quickly budget is spent and how often users see ads.</p>
            <h4>Pacing Types:</h4>
            <ul>
                <li>Even pacing</li>
                <li>ASAP pacing</li>
                <li>Day-parting</li>
                <li>Frequency capping</li>
            </ul>
        `,
        x: 500,
        y: 250,
        category: 'demand',
        parent: 'dsp'
    },
    
    targeting: {
        id: 'targeting',
        name: 'Targeting',
        description: 'Audience and context targeting capabilities',
        details: `
            <p>Targeting allows advertisers to reach specific audiences based on various criteria.</p>
            <h4>Targeting Options:</h4>
            <ul>
                <li>Demographic targeting</li>
                <li>Behavioral targeting</li>
                <li>Contextual targeting</li>
                <li>Geographic targeting</li>
                <li>Device targeting</li>
            </ul>
        `,
        x: 500,
        y: 300,
        category: 'demand',
        parent: 'dsp'
    },
    
    privacy: {
        id: 'privacy',
        name: 'Privacy / COPPA',
        description: 'Privacy compliance and regulations',
        details: `
            <p>Privacy controls ensure ads comply with various regulations and privacy standards.</p>
            <h4>Key Regulations:</h4>
            <ul>
                <li>GDPR (Europe)</li>
                <li>CCPA (California)</li>
                <li>COPPA (Children's Privacy)</li>
                <li>LATAM regulations</li>
                <li>Galaxy Policy</li>
            </ul>
        `,
        x: 500,
        y: 350,
        category: 'demand',
        parent: 'dsp'
    },
    
    advertiser: {
        id: 'advertiser',
        name: 'Advertiser (Demand)',
        description: 'Brands and agencies buying ad inventory',
        details: `
            <p>Advertisers purchase ad inventory to promote their products and services.</p>
            <h4>Advertiser Activities:</h4>
            <ul>
                <li>Campaign planning</li>
                <li>Creative development</li>
                <li>Budget allocation</li>
                <li>Performance analysis</li>
            </ul>
        `,
        x: 650,
        y: 150,
        category: 'demand',
        connections: ['nike', 'pepsico']
    },
    
    nike: {
        id: 'nike',
        name: 'Nike',
        description: 'Example advertiser: Nike',
        details: `
            <p>Major brand advertiser utilizing programmatic channels.</p>
            <h4>Typical Campaign Goals:</h4>
            <ul>
                <li>Brand awareness</li>
                <li>Product launches</li>
                <li>Retargeting</li>
                <li>Customer acquisition</li>
            </ul>
        `,
        x: 650,
        y: 250,
        category: 'demand',
        parent: 'advertiser'
    },
    
    pepsico: {
        id: 'pepsico',
        name: 'PepsiCo',
        description: 'Example advertiser: PepsiCo',
        details: `
            <p>Major brand advertiser utilizing programmatic channels.</p>
            <h4>Typical Campaign Goals:</h4>
            <ul>
                <li>Brand awareness</li>
                <li>Product launches</li>
                <li>Retargeting</li>
                <li>Customer acquisition</li>
            </ul>
        `,
        x: 650,
        y: 300,
        category: 'demand',
        parent: 'advertiser'
    },
    
    // Data layer
    dmp: {
        id: 'dmp',
        name: 'DMP',
        description: 'Data Management Platform',
        details: `
            <p>Data Management Platforms collect, organize, and activate audience data for targeting.</p>
            <h4>DMP Functions:</h4>
            <ul>
                <li>Audience segmentation</li>
                <li>Data collection & organization</li>
                <li>Look-alike modeling</li>
                <li>Cross-device mapping</li>
                <li>Data enrichment</li>
            </ul>
        `,
        x: 500,
        y: 450,
        category: 'data',
        connections: ['targeting', 'privacy']
    }
};

// Define workflow processes
const workflows = {
    standard: {
        title: "Standard RTB Flow",
        steps: [
            { id: 1, text: "User visits publisher content (app/website)" },
            { id: 2, text: "Ad request sent to SSP" },
            { id: 3, text: "SSP forwards request to Ad Exchange" },
            { id: 4, text: "Ad Exchange sends bid requests to DSPs" },
            { id: 5, text: "DSPs evaluate and place bids" },
            { id: 6, text: "Ad Exchange selects winning bid" },
            { id: 7, text: "Ad creative served to publisher" },
            { id: 8, text: "User sees the ad" },
            { id: 9, text: "Reporting and analytics collected" }
        ],
        components: ['publisher', 'ssp', 'adexchange', 'dsp', 'advertiser']
    },
    headerBidding: {
        title: "Header Bidding Flow",
        steps: [
            { id: 1, text: "User visits publisher content" },
            { id: 2, text: "Publisher's header bidding wrapper initiates" },
            { id: 3, text: "Simultaneous bid requests sent to multiple SSPs/Exchanges" },
            { id: 4, text: "All bids collected within timeout period" },
            { id: 5, text: "Winning bid selected from all responses" },
            { id: 6, text: "Ad server notified of winning bid and price" },
            { id: 7, text: "Ad creative from winning bidder is served" },
            { id: 8, text: "Performance data collected for optimization" }
        ],
        components: ['publisher', 'ssp', 'adexchange', 'dsp', 'advertiser']
    },
    waterfall: {
        title: "Waterfall Strategy",
        steps: [
            { id: 1, text: "User visits publisher content" },
            { id: 2, text: "Ad request sent to primary SSP/Exchange" },
            { id: 3, text: "If no acceptable bid, request passes to next SSP" },
            { id: 4, text: "Process continues down the 'waterfall' of demand sources" },
            { id: 5, text: "First SSP/Exchange to return acceptable bid wins" },
            { id: 6, text: "Ad is served from winning source" },
            { id: 7, text: "Performance data analyzed to adjust waterfall order" }
        ],
        components: ['publisher', 'ssp', 'adexchange']
    }
};

// Initialize the visualization on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create the initial visualization
    createVisualization();
    
    // Add event listeners for workflow buttons
    document.getElementById('btn-standard-flow').addEventListener('click', () => showWorkflow('standard'));
    document.getElementById('btn-header-bidding').addEventListener('click', () => showWorkflow('headerBidding'));
    document.getElementById('btn-waterfall').addEventListener('click', () => showWorkflow('waterfall'));
    document.getElementById('btn-reset').addEventListener('click', resetVisualization);
    
    // Event listeners for closing panels
    document.getElementById('close-details').addEventListener('click', hideComponentDetails);
    document.getElementById('close-workflow').addEventListener('click', hideWorkflowOverlay);
});

// Function to create the visualization
function createVisualization() {
    const container = document.getElementById('adtech-visualization');
    container.innerHTML = '';
    
    // Create SVG element for connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.classList.add('connections-svg');
    container.appendChild(svg);
    
    // Create div for each component
    Object.values(adtechComponents).forEach(component => {
        const elem = document.createElement('div');
        elem.id = component.id;
        elem.className = `component ${component.category}`;
        if (component.parent) {
            elem.classList.add('child-component');
        }
        
        elem.style.left = `${component.x}px`;
        elem.style.top = `${component.y}px`;
        
        elem.innerHTML = `
            <div class="component-header">${component.name}</div>
            <div class="component-description">${component.description}</div>
        `;
        
        // Add click event to show component details
        elem.addEventListener('click', () => showComponentDetails(component));
        
        container.appendChild(elem);
    });
    
    // Draw connections after a short delay to ensure elements are positioned
    setTimeout(drawConnections, 100);
}

// Function to draw connection lines between components
function drawConnections() {
    const svg = document.querySelector('.connections-svg');
    svg.innerHTML = '';
    
    // Draw parent-child connections
    Object.values(adtechComponents).forEach(component => {
        if (component.parent) {
            const parent = document.getElementById(component.parent);
            const child = document.getElementById(component.id);
            
            if (parent && child) {
                const parentRect = parent.getBoundingClientRect();
                const childRect = child.getBoundingClientRect();
                const containerRect = document.getElementById('adtech-visualization').getBoundingClientRect();
                
                // Calculate positions relative to the container
                const x1 = parentRect.left + parentRect.width / 2 - containerRect.left;
                const y1 = parentRect.top + parentRect.height - containerRect.top;
                const x2 = childRect.left + childRect.width / 2 - containerRect.left;
                const y2 = childRect.top - containerRect.top;
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', x1);
                line.setAttribute('y1', y1);
                line.setAttribute('x2', x2);
                line.setAttribute('y2', y2);
                line.classList.add('connection', 'parent-child');
                svg.appendChild(line);
            }
        }
    });
    
    // Draw explicit connections
    Object.values(adtechComponents).forEach(component => {
        if (component.connections) {
            const source = document.getElementById(component.id);
            
            component.connections.forEach(targetId => {
                const target = document.getElementById(targetId);
                
                if (source && target) {
                    const sourceRect = source.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const containerRect = document.getElementById('adtech-visualization').getBoundingClientRect();
                    
                    // Calculate positions relative to the container
                    let x1, y1, x2, y2;
                    
                    // If horizontal connection
                    if (Math.abs(sourceRect.top - targetRect.top) < Math.abs(sourceRect.left - targetRect.left)) {
                        y1 = sourceRect.top + sourceRect.height / 2 - containerRect.top;
                        y2 = targetRect.top + targetRect.height / 2 - containerRect.top;
                        
                        if (sourceRect.left < targetRect.left) {
                            x1 = sourceRect.right - containerRect.left;
                            x2 = targetRect.left - containerRect.left;
                        } else {
                            x1 = sourceRect.left - containerRect.left;
                            x2 = targetRect.right - containerRect.left;
                        }
                    } 
                    // If vertical connection
                    else {
                        x1 = sourceRect.left + sourceRect.width / 2 - containerRect.left;
                        x2 = targetRect.left + targetRect.width / 2 - containerRect.left;
                        
                        if (sourceRect.top < targetRect.top) {
                            y1 = sourceRect.bottom - containerRect.top;
                            y2 = targetRect.top - containerRect.top;
                        } else {
                            y1 = sourceRect.top - containerRect.top;
                            y2 = targetRect.bottom - containerRect.top;
                        }
                    }
                    
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', x1);
                    line.setAttribute('y1', y1);
                    line.setAttribute('x2', x2);
                    line.setAttribute('y2', y2);
                    line.classList.add('connection', 'component-connection');
                    svg.appendChild(line);
                }
            });
        }
    });
}

// Function to show component details
function showComponentDetails(component) {
    const detailsPanel = document.getElementById('component-details');
    const titleElem = document.getElementById('component-title');
    const contentElem = document.getElementById('component-content');
    
    titleElem.textContent = component.name;
    contentElem.innerHTML = component.details;
    
    detailsPanel.classList.remove('hidden');
}

// Function to hide component details
function hideComponentDetails() {
    document.getElementById('component-details').classList.add('hidden');
}

// Function to show workflow overlay
function showWorkflow(workflowId) {
    const workflow = workflows[workflowId];
    if (!workflow) return;
    
    // Highlight relevant components
    resetVisualization();
    workflow.components.forEach(componentId => {
        const element = document.getElementById(componentId);
        if (element) {
            element.classList.add('highlighted');
        }
    });
    
    // Show workflow steps in overlay
    const overlay = document.getElementById('workflow-overlay');
    const title = document.getElementById('workflow-title');
    const stepsContainer = document.getElementById('workflow-steps');
    
    title.textContent = workflow.title;
    
    stepsContainer.innerHTML = workflow.steps.map(step => 
        `<div class="workflow-step">
            <div class="step-number">${step.id}</div>
            <div class="step-text">${step.text}</div>
         </div>`
    ).join('');
    
    overlay.classList.remove('hidden');
}

// Function to hide workflow overlay
function hideWorkflowOverlay() {
    document.getElementById('workflow-overlay').classList.add('hidden');
}

// Function to reset visualization (remove highlights)
function resetVisualization() {
    document.querySelectorAll('.component').forEach(element => {
        element.classList.remove('highlighted');
    });
    hideWorkflowOverlay();
}

// Function to handle window resize
window.addEventListener('resize', drawConnections);
