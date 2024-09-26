package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.LoginDTO;
import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.utility.JobPortalException;
import org.springframework.http.ResponseEntity;

public interface UserService {
    public ResponseEntity<UserDTO> registerUser(UserDTO userDTO) throws JobPortalException;
    public ResponseEntity<UserDTO> loginUser(LoginDTO loginDTO) throws JobPortalException;

}
