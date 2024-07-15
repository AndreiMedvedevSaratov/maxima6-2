import React from 'react';

interface MouseTrackerProps {
    render: (state: { x: number; y: number }) => React.ReactNode;
}

interface MouseTrackerState {
    x: number;
    y: number;
}

export class MouseTracker extends React.Component<MouseTrackerProps, MouseTrackerState> {
    state: MouseTrackerState = { x: 0, y: 0 };

    handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}