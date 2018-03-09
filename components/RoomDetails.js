class RoomDetails extends React.Component {
  render() {
    return (
            <tbody>
              <tr>
                <th>{this.props.details.ApartmentName}</th>
                <td>{this.props.details.Beds}</td>
                <td>{this.props.details.Baths}</td>
                <td>{this.props.details.FloorplanName}</td>
                <td>${this.props.details.MinimumRent} - ${this.props.details.MaximumRent}</td>
                <td><a target="_blank" href={this.props.details.ApplyOnlineURL}><button type="button" className="btn btn-primary">Apply</button></a></td>
              </tr>
            </tbody>
      );
    }
  }

  export default RoomDetails;