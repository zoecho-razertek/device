import { useEffect, useState } from 'react'
import './App.css'
import imgBg from './assets/bg.svg'
import icBluetooth from './assets/ic_bluetooth.svg'
import icBluetoothOff from './assets/ic_bluetooth_off.svg'
import imgLock from './assets/img_lock.png'
import imgLockG from './assets/img_lock_g.png'
import icDesktopHome from './assets/ic_desktop_home.svg'
import icLockOpen from './assets/ic_lock_open.svg'
import icDelete from './assets/ic_delete.svg'
import icBack from './assets/ic_back.svg'
import waveLeft from './assets/wave_left.svg'
import waveRight from './assets/wave_right.svg'
import bgMkey from './assets/bg_mkey.svg'
import imgMkey from './assets/img_mkey.png'
import imgMkeyE from './assets/img_mkey_e.png'

const DOOR_PASSWORD_MAX_LENGTH = 8
const ADMIN_PASSWORD_MAX_LENGTH = 4

function HomePage({ onUnlock, onSettings, offline = false }) {
  return (
    <div className="home-page">
      <img className="home-bg" src={imgBg} alt="" />
      <img
        className="home-bluetooth"
        src={offline ? icBluetoothOff : icBluetooth}
        alt={offline ? '藍牙已中斷' : '藍牙已連線'}
      />

      <div className="home-shield">
        <img className="home-shield-layer" src={offline ? imgLockG : imgLock} alt="門鎖狀態" />
        <img className="home-shield-lock" src={icDesktopHome} alt="" />
      </div>

      <button className="home-btn home-btn--unlock" type="button" onClick={onUnlock} disabled={offline}>開鎖</button>
      <button className="home-btn home-btn--settings" type="button" onClick={onSettings} disabled={offline}>設定</button>
    </div>
  )
}

function PasscodeInputPage({ title, maxLength, onBack, onSubmit }) {
  const [dial] = useState(1)
  const [password, setPassword] = useState('')

  const pressInput = () => {
    setPassword(previous => previous.length >= maxLength ? previous : previous + String(dial))
  }

  const deleteLast = () => {
    setPassword(previous => previous.slice(0, -1))
  }

  return (
    <div className="input-page">
      <img className="home-bg" src={imgBg} alt="" />

      <p className={`input-title${password ? ' input-title--value' : ''}`}>
        {password || title}
      </p>

      <img className="input-wave input-wave--left" src={waveLeft} alt="" />
      <img className="input-wave input-wave--right" src={waveRight} alt="" />

      <button className="input-digit" type="button" onClick={pressInput}>
        <span className="input-digit-value">{dial}</span>
        <span className="input-digit-hint">按壓輸入</span>
      </button>

      <button className="input-side-btn input-side-btn--back" type="button" aria-label="返回" onClick={onBack}>
        <img src={icBack} alt="" width="16" height="16" />
      </button>
      <button className="input-side-btn input-side-btn--delete" type="button" aria-label="刪除" onClick={deleteLast}>
        <img src={icDelete} alt="" width="23" height="16" />
      </button>

      <button className="input-submit" type="button" onClick={() => onSubmit(password)}>送出</button>
    </div>
  )
}

function UnlockedPage({ onDone }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, 5000)
    return () => window.clearTimeout(timer)
  }, [onDone])

  return (
    <div className="unlock-page">
      <img className="home-bg" src={imgBg} alt="" />
      <img className="home-bluetooth" src={icBluetooth} alt="藍牙已連線" />

      <div className="home-shield unlock-shield">
        <img className="home-shield-layer" src={imgLock} alt="門鎖狀態" />
        <img className="home-shield-lock unlock-icon-closed" src={icDesktopHome} alt="" />
        <img className="home-shield-lock unlock-icon-open" src={icLockOpen} alt="已開鎖" />
      </div>

      <p className="unlock-status">已開鎖</p>
    </div>
  )
}

function SettingsPage({ onBack, onUnbind }) {
  return (
    <div className="settings-page">
      <img className="home-bg" src={imgBg} alt="" />
      <img className="home-bluetooth" src={icBluetooth} alt="藍牙已連線" />

      <p className="settings-device-name">Outdoor Ready</p>

      <button className="settings-unbind" type="button" onClick={onUnbind}>與主機解綁</button>

      <button className="input-side-btn input-side-btn--back" type="button" aria-label="返回" onClick={onBack}>
        <img src={icBack} alt="" width="16" height="16" />
      </button>
    </div>
  )
}

function UnbindConfirmPage({ lines, confirmLabel = '確定', danger = false, onBack, onConfirm }) {
  return (
    <div className="confirm-page">
      <img className="home-bg" src={imgBg} alt="" />
      <img className="home-bluetooth" src={icBluetooth} alt="藍牙已連線" />

      <p className="confirm-message">
        {lines.map((line, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
      </p>

      <button className="input-side-btn input-side-btn--back" type="button" aria-label="返回" onClick={onBack}>
        <img src={icBack} alt="" width="16" height="16" />
      </button>

      <button
        className={`input-submit${danger ? ' input-submit--danger' : ''}`}
        type="button"
        onClick={onConfirm}
      >
        {confirmLabel}
      </button>
    </div>
  )
}

function UnbindDonePage({ onConfirm }) {
  return (
    <div className="confirm-page">
      <img className="home-bg" src={imgBg} alt="" />
      <img className="home-bluetooth" src={icBluetoothOff} alt="藍牙已中斷" />

      <p className="unbind-done-message">門外件已解綁</p>

      <button className="input-submit" type="button" onClick={onConfirm}>確定</button>
    </div>
  )
}

function MkeyPage({ onSense }) {
  return (
    <div className="mkey-page" onClick={onSense}>
      <img className="mkey-bg" src={bgMkey} alt="" />

      <span className="mkey-ripple" />
      <span className="mkey-ripple" />
      <span className="mkey-ripple" />
      <span className="mkey-ripple" />

      <div className="mkey-icon-wrap">
        <img className="mkey-icon" src={imgMkey} alt="Mkey" />
      </div>
    </div>
  )
}

function MkeyUnlockPage({ onDone, autoOpen = false }) {
  const [opened, setOpened] = useState(autoOpen)

  useEffect(() => {
    if (!opened) return
    const timer = window.setTimeout(onDone, 5000)
    return () => window.clearTimeout(timer)
  }, [opened, onDone])

  return (
    <div className="mkey-unlock-page" onClick={() => setOpened(true)}>
      <img className="home-bg" src={imgBg} alt="" />
      <img className="home-bluetooth" src={icBluetooth} alt="藍牙已連線" />

      <div className={`mkey-unlock-badge${opened ? ' mkey-unlock-badge--pulse' : ''}`}>
        <img className="mkey-unlock-icon" src={imgMkeyE} alt="" />
        <img
          className={`home-shield-lock${opened ? ' unlock-icon-closed' : ''}`}
          src={icDesktopHome}
          alt=""
        />
        {opened && (
          <img className="home-shield-lock unlock-icon-open" src={icLockOpen} alt="已開鎖" />
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [scenario, setScenario] = useState('home')
  const [screen, setScreen] = useState('home')
  const [mkeySensed, setMkeySensed] = useState(false)

  const switchScenario = (next) => {
    setScenario(next)
    setScreen('home')
    setMkeySensed(false)
  }

  return (
    <div className="app-wrapper">
      <div className="frame-boundary">
        <div className="device-frame">
          {scenario === 'mkey' ? (
            mkeySensed ? (
              <MkeyUnlockPage autoOpen onDone={() => switchScenario('home')} />
            ) : (
              <MkeyPage onSense={() => setMkeySensed(true)} />
            )
          ) : screen === 'unlocked' ? (
            <UnlockedPage onDone={() => setScreen('home')} />
          ) : screen === 'input' ? (
            <PasscodeInputPage
              title="輸入開門密碼"
              maxLength={DOOR_PASSWORD_MAX_LENGTH}
              onBack={() => setScreen('home')}
              onSubmit={() => setScreen('unlocked')}
            />
          ) : screen === 'adminInput' ? (
            <PasscodeInputPage
              title="輸入管理密碼"
              maxLength={ADMIN_PASSWORD_MAX_LENGTH}
              onBack={() => setScreen('settings')}
              onSubmit={() => setScreen('unbindConfirm')}
            />
          ) : screen === 'unbindConfirm' ? (
            <UnbindConfirmPage
              lines={['確定要解綁嗎？']}
              onBack={() => setScreen('home')}
              onConfirm={() => setScreen('unbindConfirm2')}
            />
          ) : screen === 'unbindConfirm2' ? (
            <UnbindConfirmPage
              lines={['解綁後僅能使用 App開鎖', '確定要繼續嗎？']}
              confirmLabel="解綁"
              danger
              onBack={() => setScreen('home')}
              onConfirm={() => setScreen('unbindDone')}
            />
          ) : screen === 'unbindDone' ? (
            <UnbindDonePage onConfirm={() => setScreen('offlineHome')} />
          ) : screen === 'offlineHome' ? (
            <HomePage offline />
          ) : screen === 'settings' ? (
            <SettingsPage onBack={() => setScreen('home')} onUnbind={() => setScreen('adminInput')} />
          ) : (
            <HomePage onUnlock={() => setScreen('input')} onSettings={() => setScreen('settings')} />
          )}
        </div>
      </div>

      <div className="scenario-btns">
        <button
          type="button"
          className={`scenario-btn${scenario === 'home' ? ' scenario-btn--active' : ''}`}
          onClick={() => switchScenario('home')}
        >
          首頁
        </button>
        <button
          type="button"
          className={`scenario-btn${scenario === 'mkey' ? ' scenario-btn--active' : ''}`}
          onClick={() => switchScenario('mkey')}
        >
          Mkey
        </button>
      </div>
    </div>
  )
}
