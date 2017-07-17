const Modal = (d,i) => {
  var string = '<form> \
  <div class="form-group"> \
    <label for="input-name">Your Name</label> \
    <input type="text" class="form-control" id="input-name" aria-describedby="inputName" placeholder="Enter your name"> \
  </div> \
  <div class="form-group"> \
    <label for="contact-email">Email</label> \
    <input type="email" class="form-control" id="contact-email" placeholder="youremail@domain.com"> \
    <small id="emailHelp" class="form-text text-muted">We will never share your email with anyone else.</small> \
  </div> \
  <div class="form-group"> \
    <label for="input-notes">Comments</label> \
    <input type="text" class="form-control" id="input-comments" aria-describedby="comments" placeholder="Important details?"> \
  </div> \
  <fieldset class="form-group"> \
    <legend>I am Reporting:</legend> \
    <div class="form-check"> \
      <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked> \
        Injured wildlife \
      </label> \
    </div> \
    <div class="form-check"> \
    <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"> \
        Damage to infrastructure \
      </label> \
    </div> \
    <div class="form-check disabled"> \
    <label class="form-check-label"> \
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3"> \
        Wildfire \
      </label> \
    </div> \
  </fieldset> \
  </form> <button id="submit" class="btn btn-primary">Submit</button><button id="close" class="btn btn-secondary">Close</button>';

  return string;
}

export default Modal;