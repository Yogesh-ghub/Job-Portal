package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.LoginDTO;
import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.entity.User;
import com.jobportal.Job.Portal.repository.UserRepository;
import com.jobportal.Job.Portal.utility.JobPortalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<UserDTO> registerUser(UserDTO userDTO) throws JobPortalException {
            Optional<User> optional = userRepo.findByEmail(userDTO.getEmail());
            if(optional.isPresent()) throw new JobPortalException("USER_FOUND");
            userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            User user = userDTO.toEntity();
            user = userRepo.save(user);
            return new ResponseEntity<>(user.toDTO(), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<UserDTO> loginUser(LoginDTO loginDTO) throws JobPortalException{
        User user = userRepo.findByEmail(loginDTO.getEmail()).orElseThrow(() -> new JobPortalException("USER_NOT_FOUND"));
        if(!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) throw new JobPortalException("INVALID_CREDENTIALS");

        return new ResponseEntity<>(user.toDTO(), HttpStatus.OK);
    }
}
