import React, { Component } from 'react';

interface ProduccionState {
  produccion: number;
  produciendo: boolean;
}

class ProduccionComponent extends Component<{}, ProduccionState> {
  productionInterval?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      produccion: 0,
      produciendo: false
    };
  }

  handleInicioProduccion = () => {
    if (!this.state.produciendo) {
      this.setState({ produciendo: true });
      // Iniciar la simulación de incremento de producción cada segundo
      this.productionInterval = setInterval(() => {
        this.setState(prevState => ({
          produccion: prevState.produccion + 1
        }));
      }, 1000);
    }
  };

  handleDetenerProduccion = () => {
    if (this.state.produciendo) {
      this.setState({ produciendo: false });
      // Detener la simulación de producción
      if (this.productionInterval) {
        clearInterval(this.productionInterval);
      }
    }
  };

  render() {
    return (
      <div>
        <h2>Estado actual de producción:</h2>
        <p>{this.state.produccion}</p>
        <button onClick={this.handleInicioProduccion}>Iniciar Producción</button>
        <button onClick={this.handleDetenerProduccion}>Detener Producción</button>
      </div>
    );
  }
}

export default ProduccionComponent;
