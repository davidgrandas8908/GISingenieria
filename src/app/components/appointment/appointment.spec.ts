import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentComponent, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.appointmentForm.get('name')?.value).toBe('');
    expect(component.appointmentForm.get('email')?.value).toBe('');
    expect(component.appointmentForm.get('phone')?.value).toBe('');
    expect(component.appointmentForm.get('service')?.value).toBe('');
    expect(component.appointmentForm.get('date')?.value).toBeTruthy();
    expect(component.appointmentForm.get('time')?.value).toBe('');
    expect(component.appointmentForm.get('description')?.value).toBe('');
  });

  it('should generate available time slots', () => {
    expect(component.availableSlots.length).toBeGreaterThan(0);
    expect(component.availableSlots[0]).toMatch(/^\d{2}:\d{2}$/);
  });

  it('should set minimum date to tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const expectedDate = tomorrow.toISOString().split('T')[0];
    
    expect(component.appointmentForm.get('date')?.value).toBe(expectedDate);
  });

  it('should validate required fields', () => {
    const form = component.appointmentForm;
    
    expect(form.valid).toBeFalsy();
    
    form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      service: 'Diseño Estructural',
      date: '2024-12-25',
      time: '09:00'
    });
    
    expect(form.valid).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.appointmentForm.get('email');
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.errors?.['email']).toBeTruthy();
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.errors?.['email']).toBeFalsy();
  });

  it('should validate phone format', () => {
    const phoneControl = component.appointmentForm.get('phone');
    
    phoneControl?.setValue('abc123');
    expect(phoneControl?.errors?.['pattern']).toBeTruthy();
    
    phoneControl?.setValue('1234567890');
    expect(phoneControl?.errors?.['pattern']).toBeFalsy();
  });

  it('should handle date change', () => {
    const testDate = '2024-12-25';
    const event = { target: { value: testDate } };
    
    component.onDateChange(event);
    
    expect(component.selectedDate).toBe(testDate);
    expect(component.appointmentForm.get('date')?.value).toBe(testDate);
  });

  it('should handle time change', () => {
    const testTime = '14:30';
    const event = { target: { value: testTime } };
    
    component.onTimeChange(event);
    
    expect(component.selectedTime).toBe(testTime);
    expect(component.appointmentForm.get('time')?.value).toBe(testTime);
  });

  it('should create calendar event with correct data', () => {
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      service: 'Diseño Estructural',
      date: '2024-12-25',
      time: '14:00',
      description: 'Test description'
    };
    
    const event = component.createCalendarEvent(formData);
    
    expect(event.summary).toContain('Test User');
    expect(event.summary).toContain('Diseño Estructural');
    expect(event.description).toContain('test@example.com');
    expect(event.attendees).toHaveSize(2);
    expect(event.attendees[0].email).toBe('ricardos.gc123@gmail.com');
    expect(event.attendees[1].email).toBe('test@example.com');
  });

  it('should reset form after successful submission', () => {
    component.submitSuccess = true;
    component.appointmentForm.patchValue({
      name: 'Test User',
      email: 'test@example.com'
    });
    
    component.resetForm();
    
    expect(component.submitSuccess).toBeFalsy();
    expect(component.submitError).toBe('');
    expect(component.appointmentForm.get('name')?.value).toBe('');
    expect(component.appointmentForm.get('email')?.value).toBe('');
  });
});
