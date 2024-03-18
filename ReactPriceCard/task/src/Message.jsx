function Message({ plan,price,user,storage,project,access,privateproj,phone,subdomain,report}){
    return (
      
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{plan}</h5>
            <h6 class="card-price text-center">{price}<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{access}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{privateproj}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{phone}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{subdomain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{report}</li>
            </ul>
            <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      
    
    );
}
export default Message;