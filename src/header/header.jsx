import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const Header = ({ role }) => {
  const [showAddPersonDialog, setShowAddPersonDialog] = useState(false);
  const [showAddGroupDialog, setShowAddGroupDialog] = useState(false);
  const [personData, setPersonData] = useState({ name: '', surname: '', number: '' });
  const [groupData, setGroupData] = useState({ groupName: '', id: '', teacherName: '', teacherSurname: '' });

  function handleAddPerson() {
    setShowAddPersonDialog(true);
  }

  function handleAddGroup() {
    setShowAddGroupDialog(true);
  }

  function handlePersonInputChange(e) {
    setPersonData({ ...personData, [e.target.name]: e.target.value });
  }

  function handleGroupInputChange(e) {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  }

  function handlePersonSubmit(e) {
    e.preventDefault();
    console.log('Add Person:', personData);
    setPersonData({ name: '', surname: '', number: '' });
    setShowAddPersonDialog(false);
  }

  function handleGroupSubmit(e) {
    e.preventDefault();
    console.log('Add Group:', groupData);
    setGroupData({ groupName: '', id: '', teacherName: '', teacherSurname: '' });
    setShowAddGroupDialog(false);
  }
  function handleCancel(e) {
    e.preventDefault();
    setPersonData({ name: '', surname: '', number: '' });
    setShowAddPersonDialog(false);
    setShowAddGroupDialog(false);

  }

  return (
    <div className="header">
      {role === "admin" ? (
        <div className="header-role">
          <div className="head-title">
            <h3>Assalomu alaykum {role} !</h3>
            <span>Kabinentingizga xush kelibsiz</span>
          </div>
          <div className="invited">
            <form>
              <input
                type="text"
                className="sidebar-input"
                placeholder="Qidiruv o'quvchilar, guruhlar va boshqa..."
              />
              <button className="sidebar-button">
                <CiSearch className="head-icon" />
              </button>
            </form>
            <div className="head-icons">
              <div className="sidebar-button" onClick={handleAddPerson}>
                <IoMdPersonAdd className="head-icon" />
              </div>
              <div className="sidebar-button" onClick={handleAddGroup}>
                <MdGroupAdd className="head-icon" />
              </div>
              <div className="sidebar-button">
                <LuLogOut className="head-icon" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-role">
          <div className="head-title">
            <h3>Assalomu alaykum Kamoliddinov Ibrohimgon !. Login(12233)</h3>
            <span>Kabinentingizga xush kelibsiz</span>
          </div>
          <div className="invited">
            <div className="head-icons">
              <div className="sidebar-button">
                <LuLogOut className="head-icon" />
              </div>
            </div>
          </div>
        </div>
      )}
      {showAddPersonDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Add Person</h2>
            <form onSubmit={handlePersonSubmit}>
              <input type="text" name="name" placeholder="Name" value={personData.name} onChange={handlePersonInputChange} />
              <input type="text" name="surname" placeholder="Surname" value={personData.surname} onChange={handlePersonInputChange} />
              <input type="text" name="number" placeholder="Number" value={personData.number} onChange={handlePersonInputChange} />
              <div className="dialog-btn">
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showAddGroupDialog && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h2>Add Group</h2>
            <form onSubmit={handleGroupSubmit}>
              <input type="text" name="groupName" placeholder="Group Name" value={groupData.groupName} onChange={handleGroupInputChange} />
              <input type="text" name="id" placeholder="ID" value={groupData.id} onChange={handleGroupInputChange} />
              <input type="text" name="teacherName" placeholder="Teacher's Name" value={groupData.teacherName} onChange={handleGroupInputChange} />
              <input type="text" name="teacherSurname" placeholder="Teacher's Surname" value={groupData.teacherSurname} onChange={handleGroupInputChange} />
              <div className="dialog-btn">
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
