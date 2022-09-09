
import React from 'react';
import ReactDOM from 'react-dom/client';
function Task(){
  
  return(
    <div>
    <div class="row">
   <div class="col-25">
<label for="Task_Name">Task_Name </label>
</div>
<div class="col-75">
<input type="text" id="Task_Name" name="Task_Name" placeholder="Task_Name..">
</input>
</div>
</div>
<div>
<div class ="row">
  <div class="col -25">
  <label for="Task_Description">Task_Description</label>
  </div>
  <div class="col-75">
  <textarea id="Task_Description" name="Task_Description" placeholder="Write Some Details about Task.."  style="height:200px"></textarea>
  </div>
  </div>

  <div class="row">
  <label for="Creator">Creator</label>
  </div>
  <div class="col-75">
  <input type="text" id="Creator" name="Creator" placeholder="Creator Name..">
  </input>
  </div>
  <div class="row">
  <label for="Duration">Duration</label>
  </div>
  <div class="col-75">
  <input type="text" id="Duration" name="Duration">
  </input>
  </div>
  <div class="row">
  <label for="CreatedAt">Creator</label>
  </div>
  <div class="col-75">
  <input type="text" id="CreatedAt" name="CreatedAt" >
  </input>
  </div>
  </div>
  </div>
  );
}
