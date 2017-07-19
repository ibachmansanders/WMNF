const Modal = (d,i) => {
  var string = '<form role="form" id="modal-form"> \
  <div class="form-group"> \
    <label for="name">Your Name</label> \
    <input type="text" class="form-control" id="name" aria-describedby="inputName" placeholder="Enter your name"> \
  </div> \
  <div class="form-group"> \
    <label for="email">Email</label> \
    <input type="email" class="form-control" id="email" placeholder="youremail@domain.com"> \
    <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small> \
  </div> \
  <div class="form-group"> \
    <label for="comments">Comments</label> \
    <input type="text" class="form-control" id="comments" aria-describedby="comments" placeholder="Important details?"> \
  </div> \
  <fieldset class="form-group"> \
    <legend>I am Reporting:</legend> \
    <div class="form-check"> \
      <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="Injured Wildlife" checked> \
        Injured wildlife \
      </label> \
    </div> \
    <div class="form-check"> \
    <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="Damage to infrastructure"> \
        Damage to infrastructure \
      </label> \
    </div> \
    <div class="form-check"> \
    <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="Wildfire"> \
        Wildfire \
      </label> \
    </div> \
    <div class="form-check"> \
    <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios4" value="Other"> \
        Other \
      </label> \
    </div> \
  </fieldset> \
  <button type="submit" id="submit" class="btn btn-primary">Submit</button> \
  </form><button id="close" class="btn btn-secondary">Close</button>';

  return string;
}

export default Modal;