import React, { Component } from 'react';
// import * as Format from './../../conStants/format';
// import { Link } from 'react-router-dom';
import { Switch } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { ListSubheader } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
var avtImage="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg";

 class listAdminItem extends Component {
    onClick=(value)=>{
        var level=value.target.value;
        var data=this.props.data;
        var updateNew={data,level}
        // console.log(data);
        this.props.updateLevel(updateNew);
    }
    render() {
        var {data,stt}=this.props;
        return (
                <tr>
                  <td>{stt}</td>
                  <td>
                      <img alt={data.imagesAdmin} src={data.imagesAdmin?data.imagesAdmin:avtImage}  
                        style={{width:"50px",height:"50px",borderRadius:"50%"}}
                       />
                  </td>
                  <td>{data.userEmail}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>
                  <FormControl >
                            <Select onClick={this.onClick} value={data.levelAdmin} id="grouped-select">
                                <ListSubheader>Quyền</ListSubheader>
                                <MenuItem  value={0}>Admin</MenuItem>
                                <MenuItem  value={1}>admin 1</MenuItem>
                                <MenuItem  value={2}>admin 2</MenuItem>
                                <MenuItem  value={3}>admin 3</MenuItem>
                                <MenuItem  value={4}>admin 4</MenuItem>
                                <MenuItem  value={5}>admin 5</MenuItem>
                                <MenuItem  value={6}>Chưa Phân Quyền</MenuItem>
                            </Select>
                    </FormControl>
                  </td>
                  <td>{new Date(data.date.seconds*1000).toDateString()}</td>
                  <td>
                    <Switch
                        checked={data.rule}
                        onChange={this.onChange}
                        name="check"
                        onClick={this.onStatus}
                    />
                  </td>
                </tr>
        )
    }
}
export default listAdminItem;